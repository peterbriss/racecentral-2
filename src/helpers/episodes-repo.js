const axios = require('axios')
const fs = require('fs')

let episodes = require('data/episodes.json')

const episodesRepo = {
  getAll: () => episodes,
  getById: (id) => episodes.find((x) => x.id.toString() === id.toString()),
  find: (x) => episodes.find(x),
  create,
  update,
  delete: _delete,
}
exports.episodesRepo = episodesRepo

function create(episode) {
  let episodes = require('data/episodes.json')
  const existingEpisode = episodes.find(
    (e) => e.link === episode.link || e.title === episode.title
  )

  if (existingEpisode) {
    return
  }

  // generate new episode id
  episode.id = episodes.length ? Math.max(...episodes.map((x) => x.id)) + 1 : 1
  console.log('id', episode.id)

  // set date created and updated
  episode.dateCreated = new Date().toISOString()
  episode.dateUpdated = new Date().toISOString()

  // add and save episode
  episodes.push(episode)
  saveData()
}

function update(id, params) {
  const episode = episodes.find((x) => x.id.toString() === id.toString())

  // set date updated
  if (episodes.dateUpdated) {
    episode.dateUpdated = new Date().toISOString()
  }

  // update and save
  Object.assign(episode, params)
  saveData()
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
function _delete(id) {
  // filter out deleted episode and save
  episodes = episodes.filter((x) => x.id.toString() !== id.toString())
  saveData()
}

// private helper functions
function saveData() {
  fs.writeFileSync('./data/episodes.json', JSON.stringify(episodes, null, 4))
}
