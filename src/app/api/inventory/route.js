import { NextResponse } from 'next/server';
import { supabase } from '@/utils/supabaseClient';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Base query: only available vehicles, selecting all columns to ensure comprehensively fetching 
    // customer details (make, model, year, price, condition, availability, transmission, fuel, bodyType, engine, color, finition, mileage, doors, cylinders, options, equipments, etc.)
    let query = supabase
      .from('vehicles')
      .select('*')
      .eq('is_sold', false);

    // 1. "Omni-Search" Parameter
    const search = searchParams.get('search');
    if (search) {
      // Use ilike for case-insensitive partial matches across multiple columns
      query = query.or(`make.ilike.%${search}%,model.ilike.%${search}%,color.ilike.%${search}%,finition.ilike.%${search}%`);
    }

    // 2. Smart Filtering Parameters
    const min_price = searchParams.get('min_price');
    const max_price = searchParams.get('max_price');
    const condition = searchParams.get('condition');
    const transmission = searchParams.get('transmission');
    const availability = searchParams.get('availability');

    if (min_price) {
      query = query.gte('price', Number(min_price));
    }
    if (max_price) {
      query = query.lte('price', Number(max_price));
    }
    if (condition) {
      query = query.eq('condition', condition);
    }
    if (transmission) {
      query = query.eq('transmission', transmission);
    }
    if (availability) {
      query = query.eq('availability', availability);
    }

    const { data, error } = await query;

    if (error) {
      throw error;
    }

    // 3. URL Construction
    const inventory = data.map((car) => ({
      ...car,
      website_link: `https://www.sarl2sauto.dz/inventory/${car.id}`
    }));

    return NextResponse.json({
      count: inventory.length,
      inventory: inventory
    }, { status: 200 });

  } catch (error) {
    console.error('API Inventory Error:', error.message);
    return NextResponse.json(
      { error: 'Failed to fetch inventory data. Database service may be unavailable.', details: error.message },
      { status: 500 }
    );
  }
}

