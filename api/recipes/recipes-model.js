

function getRecipeById(recipe_id) {
    return Promise.resolve(`awesome recpie with id ${recipe_id}`)
}

module.exports = {
  getRecipeById,
};