import { api } from "../config/api";
import { Card, CreateCard } from "../interfaces/card";
import { CreatePlayer, Player } from "../interfaces/player";

class PlayerService {
  async getAll() {
    const response = await api.get("/players");

    return response.data as Player[];
  }

  async create({ name }: CreatePlayer) {
    await api.post("/players", { name });
  }

  async delete(id: string) {
    await api.delete(`/players/${id}`);
  }
}

export default new PlayerService();
