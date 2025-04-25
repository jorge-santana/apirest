export class RecordNotFoundError extends Error {
  constructor(private readonly id: number) {
    super(`Erro: Item de ID ${id} não foi localizado no banco de dados`);
  }
}
