const url = `/api/v1/recipes`;

class RecipeModel {
  static all() {
    return fetch(url)
    .then((res) => res.json())
    .catch((err) => {
      console.log('Error fetching data in RecipeModel.all', err);
      return { recipe: [] };
    });
  }
  static getOne(id) {
    return fetch(`${url}/${id}`)
    .then((res) => res.json())
    .catch((err) => {
      console.log('Error fetching data in RecipeModel.getOne', err);
      return { recipe: {} };
    });
  }

  static create(newRecipe) {
    return fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newRecipe)
    })
    .then((res) => res.json())
    .catch((err) => {
      console.log('Error fetching data in RecipeModel.create', err);
      return { message: 'Error fetching data in RecipeModel.create' };
    });
  }

  static update = (id, updatedRecipe) => {
    return fetch(`${url}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedRecipe)
    })
    .then((res) => res.json())
    .catch((err) => {
      console.log('Error fetching data in RecipeModel.update', err);
      return { message: 'Error fetching data in RecipeModel.update'}
    })
  }
  
  static delete = (id) => {
    return fetch(`${url}/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
    .then((res) => res.json())
    .catch((err) => {
      console.log('Error deleting game in RecipeModel.delete', err);
      return {message: 'Error deleting game in RecipeModel.delete'};
    });
  }
}

export default RecipeModel;