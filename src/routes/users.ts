import express, { Request, Response } from 'express';
const router = express.Router();

// router.get('/', (req: Request, res: Response, next: NextFunction): void => {
router.get('/', (req: Request, res: Response): void => {
  const fetchData = async (url: string): Promise<any> => {
    try {
      const response = await fetch(url);

      if (response?.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error(`Error: ${response ? response.status : 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Failed to fetch data:', (error as Error).message);
      throw error; // Re-throw the error after logging
    }
  };

  fetchData('https://jsonplaceholder.typicode.com/posts')
    .then((data) => {
      const responseData = JSON.stringify(data, null, 2); // 2 for pretty print
      res.send(responseData);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
});

export default router;
