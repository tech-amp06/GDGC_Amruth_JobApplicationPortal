import './filters.css';
import { useForm } from 'react-hook-form';
import { FilterContext } from '../HomePage/homepage';
import { useContext } from 'react';

function Filters() {
  const { setFilters } = useContext(FilterContext);
  const { register, handleSubmit } = useForm();

  return (
    <div className="filters">
      <form onSubmit={handleSubmit((filter) => setFilters(filter))}>
        <h4 style={{ fontWeight: 'bold', display: 'inline' }}>Filters</h4>
        <button style={{ backgroundColor: 'white', border: 'none', color: 'var(--primary)', margin: 'auto', fontWeight: 'bold', fontSize: '0.9rem', margin: 'auto' }}>Apply filters</button>
        
        <div className="location">
          <h6>Location</h6>

          <div className="form-check">
            <input {...register("location")} className="form-check-input" type="checkbox" value="georgia" id="georgia" />
            <label className="form-check-label" htmlFor="georgia">
              Georgia
            </label>
          </div>

          <div className="form-check">
            <input {...register("location")} className="form-check-input" type="checkbox" value="israel" id="israel" />
            <label className="form-check-label" htmlFor="israel">
              Israel
            </label>
          </div>

          <div className="form-check">
            <input {...register("location")} className="form-check-input" type="checkbox" value="morocco" id="morocco" />
            <label className="form-check-label" htmlFor="morocco">
              Morocco
            </label>
          </div>

          <div className="form-check">
            <input {...register("location")} className="form-check-input" type="checkbox" value="comoros" id="comoros" />
            <label className="form-check-label" htmlFor="comoros">
              Comoros
            </label>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Filters;