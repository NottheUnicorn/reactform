import './App.css';
import { useForm } from 'react-hook-form'

function App() {
  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm();
  const onSubmit = data => console.log(data);
  console.log('errors', errors);



  return (
    <div className="container">
      <div className='row'>

      {/* Form Column */}
      <div className='column'>
        <div className='left-half'>
          <h1>Accurate Inventory</h1>
          <p>Enter a car for Inventory</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <p className='input-label'>Make *</p>
            <input
            className='input'
            type='text'
            placeholder='Make'
            {...register("name", {
              required:true,
              maxLength: 80
            })}
          />
          {errors.name && <span className='error'>
            {errors.name.type === 'required' && 'This field is required.'}
            {errors.name.type === 'maxLength' && 'Value is too long.'}
            </span>
            }

            

            
            <p className='input-label'>Model *</p>
            <input
            className='input'
            type='text'
            placeholder='Model'
            {...register("name", {
              required:true,
              maxLength: 80
            })}
          />
          {errors.name && <span className='error'>
            {errors.name.type === 'required' && 'This field is required.'}
            {errors.name.type === 'maxLength' && 'Value is too long.'}
            </span>
            }


            <p className='input-label'>Year *</p>
                        <input
                        className='input'
                        type='text'
                        placeholder='Year'
                        {...register("year", {
                          required:true,
                          maxLength: 80
                        })}
                      />
                      {errors.name && <span className='error'>
                        {errors.year.type === 'required' && 'This field is required.'}
                        {errors.year.type === 'maxLength' && 'Value is too long.'}
                        </span>
                        }

                        <p className='input-label'>Price *</p>
                              <input
                              className='input'
                              type='text'
                              placeholder='Price'
                              {...register("price", {
                                required:true,
                                maxLength: 80
                              })}
                            />
                            {errors.name && <span className='error'>
                              {errors.price.type === 'required' && 'This field is required.'}
                              {errors.price.type === 'maxLength' && 'Value is too long.'}
                              </span>
                              }

            <div>
              <input className='submit' type="submit" value="Submit Car" />
            </div>


          </form>

        </div>
      </div>

    



      <div className='column'>
      <img
      src='images/car.jpeg'
      alt='luxury car'
      />
      </div>




      </div>
    
      </div>
  )
}

export default App;
