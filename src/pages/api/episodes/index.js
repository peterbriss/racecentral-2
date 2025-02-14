import { episodesRepo } from '@/helpers/episodes-repo'

export default function index(req, res) {
  const episodes = episodesRepo.getAll()

  return res.status(200).json(episodes)
}
