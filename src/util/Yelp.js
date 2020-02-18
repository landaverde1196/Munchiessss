const apiKey =
  "elaefg_Q3A4i44aO8P8rFwRtfx36FfKto7IgOTeyJ2wK-SPSuf0Sqo73aJzBJKrqOPhve-56IRFbN4HsDUJdWy1SJvOYS4orHKkkGpx7kY2shenXWzpr7m-h7G0XXnYx";

  const Yelp = {
    searchYelp(term, location, sortBy) {
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          }));
        }
      });
    }
  };
  
  export default Yelp;