import React, { useState } from "react";

function RecipeCreate({addRecipe}) {
  const initFormState= {
    name: "",
    cuisine:"",
    photo: "",
    ingredients: "",
    preparation: "",
    };
  const [formData, setFormData] = useState({...initFormState});
  const handleChange= ({target}) =>{
    setFormData({
      ...formData, 
      [target.name]: target.value,
    })
  };                   
//handleSubmit creates new recipe form form and clears form contents
  const handleSubmit = (e) => {
  e.preventDefault();
  addRecipe(formData);
  setFormData({ ...initFormState });
  };

//text areas should be used for ingredients and preparation
//input areas type text should be used for recipe name and cuisine
//photo should be type url
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
               <input 
                 id="name"
                 name="name"
                 placeholder="Name"
                 type="text"
                 value={formData.name} 
                 onChange={handleChange} 
                 required={true}/>
            </td>
                <input 
                  id="cuisine"
                  name="cuisine"
                  placeholder="Cuisine"
                  type="text"
                  value={formData.cuisine}
                  onChange={handleChange}
                  required={true}/>
            <td>
            <td>
               <input 
                 id="photo"
                 name="photo" 
                 placeholder="URL"
                 value={formData.photo} 
                 onChange={handleChange}
                 type="url" 
                 required={true}/>
            </td>
            <td>
               <textarea 
                 id="ingredients"
                 name="ingredients" 
                 placeholder="Ingredients"
                 value={formData.ingredients} 
                 onChange={handleChange}
                 required={true} />
            </td>
            <td>
               <textarea 
                 id="preparation"
                 name="preparation" 
                 placeholder="Preparation"
                 value={formData.preparation} 
                 onChange={handleChange}
                 required={true} 
                 cols="5" rows="5"/>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
