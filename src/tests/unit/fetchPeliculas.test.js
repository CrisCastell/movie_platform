import { fetchPeliculas } from '../../core/useCases/fetchPeliculas';
import { themoviedbApi } from '../../adapters/api/themoviedbApi';

jest.mock('../../adapters/api/themoviedbApi');

test('fetchPeliculas debe retornar un arreglo de peliculas', async () => {
  const peliculasData = [
    { id: 1, title: 'Pelicula 1', overview: 'Overview 1', releaseDate: '2023-01-01', posterPath: '/path1.jpg' },
    { id: 2, title: 'Pelicula 2', overview: 'Overview 2', releaseDate: '2023-02-01', posterPath: '/path2.jpg' }
  ];

  themoviedbApi.get.mockResolvedValueOnce({ data: peliculasData });

  const peliculas = await fetchPeliculas();
  expect(peliculas).toHaveLength(2);
});