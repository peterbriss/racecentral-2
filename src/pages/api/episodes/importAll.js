import { episodesRepo } from '@/helpers/episodes-repo'

export default function importAll(req, res) {
  try {
    const result = JSON.parse(JSON.stringify(req.body))

    result.forEach((episode) => {
      episodesRepo.create(episode)
    })

    return res.status(200).json({})
  } catch (err) {
    console.log('Error: ', err.message)
    return res.status(500).json({ error: err.message })
  }
}
