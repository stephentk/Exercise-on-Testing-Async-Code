import axios from "axios"

async function getCountries() {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

    async function getRegion() {
        try {
          const response = await axios.get('https://restcountries.com/v3.1/region/{region}');
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      }
        async function getName() {
            try {
              const response = await axios.get('https://restcountries.com/v3.1/name/{name}');
              console.log(response);
            } catch (error) {
              console.error(error);
            }
          }

          async function getContinet() {
            try {
              const response = await axios.get('https://restcountries.com/v2/continent/{region}}');
              console.log(response);
            } catch (error) {
              console.error(error);
            }
          }



  console.log(getCountries());
  console.log(getRegion());
  console.log(getName());
  console.log(getContinet());

