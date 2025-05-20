export const API_BASE_URL = process.env.EXPO_PUBLIC_AUTH_BASE_URL;

export const ENDPOINTS = {
  verifyToken: `${API_BASE_URL}/verifyToken`,
  getAccessLevel: `${API_BASE_URL}/getAccessLevel`,
};

export const PRIVILEGED_ROLES = ["dev", "paidUser", "premiumUser"];