// app/services/auth/api/authentication.ts
import axios from 'axios';
import { ENDPOINTS } from '../config/apiConfig';

export async function verifyToken(token: string): Promise<boolean> {
  try {
    // Verify the token by calling the authentication endpoint.
    const response = await axios.post(ENDPOINTS.verifyToken, {}, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.status === 200;
  } catch (error) {
    return false;
  }
}