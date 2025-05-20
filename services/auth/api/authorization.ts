import axios from 'axios';
import { ENDPOINTS } from '../config/apiConfig';

export async function getAccessLevel(token: string): Promise<string[]> {
  try {
    const response = await axios.post(ENDPOINTS.getAccessLevel, {}, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (response.status === 200) {
      return response.data.accesslevels;
    } else {
      throw new Error('Failed to fetch access levels');
    }
  } catch (error) {
    throw error;
  }
}