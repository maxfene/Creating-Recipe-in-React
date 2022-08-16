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

  const handleSubmit = (e) => {
  e.preventDefault();
  addRecipe(formData);
  setFormData({ ...initFormState });
  };

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td align="left">
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
            <td align="left">
               <input 
                 id="photo"
                 name="photo" 
                 placeholder="URL"
                 value={formData.photo} 
                 onChange={handleChange}
                 type="url" 
                 required={true}/>
            </td>
            <td align="left">
               <textarea 
                 id="ingredients"
                 name="ingredients" 
                 placeholder="Ingredients"
                 value={formData.ingredients} 
                 onChange={handleChange}
                 required={true} />
            </td>
            <td align="left">
               <textarea 
                 id="preparation"
                 name="preparation" 
                 placeholder="Preparation"
                 value={formData.preparation} 
                 onChange={handleChange}
                 required={true} 
                 cols="5" rows="5"/>
            </td>
            <td align="left">
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
