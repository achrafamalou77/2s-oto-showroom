import VehicleCard from '../VehicleCard/VehicleCard';
import styles from './InventoryGrid.module.css';

export default function InventoryGrid({ vehicles }) {
  if (!vehicles || vehicles.length === 0) return null;

  return (
    <section className={styles.section} id="inventory-section">
      <div className="container">
        <h2 className={styles.sectionTitle}>Véhicules Populaires</h2>

        <div className={styles.grid}>
          {vehicles.map((vehicle, index) => (
            <div
              key={vehicle.id}
              className={`${styles.cell} ${index === 0 ? styles.cellFeatured : ''}`}
            >
              <VehicleCard vehicle={vehicle} featured={index === 0} />
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <a href="/inventaire" className="btn-primary" id="view-all-btn">
            Voir tout l&apos;inventaire
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
