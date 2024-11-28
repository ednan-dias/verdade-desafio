import { api } from "../config/api";
import { Card, CreateCard } from "../interfaces/card";

class CardService {
  async getAll() {
    const response = await api.get("/cards");

    return response.data as Card[];
  }

  async create({ type, message }: CreateCard) {
    await api.post("/cards", { type, message });
  }

  async delete(id: string) {
    await api.delete(`/cards/${id}`);
  }
}

export default new CardService();
