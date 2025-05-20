// services/payments/api/payments.ts

/* -------------------------------------------------------------------------- */
/*  ENV CONFIG                                                                */
/* -------------------------------------------------------------------------- */

const PAYMENT_ROUTE = process.env.EXPO_PUBLIC_PAYMENT_ROUTE;
const FRONTEND_AUTH_TOKEN = process.env.EXPO_PUBLIC_FRONTEND_AUTH_TOKEN as string;

if (!PAYMENT_ROUTE || !FRONTEND_AUTH_TOKEN) {
  throw new Error(
    '[payments] Missing EXPO_PUBLIC_PAYMENT_ROUTE or EXPO_PUBLIC_FRONTEND_AUTH_TOKEN in your .env file'
  );
}

/* -------------------------------------------------------------------------- */
/*  ENDPOINTS                                                                 */
/* -------------------------------------------------------------------------- */

const ENDPOINTS = {
  checkBalance: `${PAYMENT_ROUTE}/checkBalance`,
  purchase:     `${PAYMENT_ROUTE}/purchase`,
};

/* -------------------------------------------------------------------------- */
/*  GENERIC API REQUEST HELPER                                                */
/* -------------------------------------------------------------------------- */

async function apiRequest<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': FRONTEND_AUTH_TOKEN,
      ...options.headers,
    },
    ...options,
  });

  if (!res.ok) {
    throw new Error(`[payments] API call to ${url} failed (${res.status})`);
  }
  return (await res.json()) as T;
}

/* -------------------------------------------------------------------------- */
/*  PUBLIC API FUNCTIONS                                                      */
/* -------------------------------------------------------------------------- */

/**  
 * checkBalance  
 *  
 * @param userId  the user’s unique identifier  
 * @returns       the current balance (whatever “units” your backend uses)  
 */
export async function checkBalance(userId: string): Promise<number> {
  const { balance } = await apiRequest<{ balance: number }>(
    ENDPOINTS.checkBalance,
    { headers: { 'x-user-id': userId } }
  );
  return balance;
}

/**  
 * PurchaseResponse  
 *  
 * @property message  human-readable status  
 * @property balance  new balance after purchase  
 */
export interface PurchaseResponse {
  message: string;
  balance: number;
}

/**  
 * purchase  
 *  
 * @param userId     the user’s unique identifier  
 * @param packageId  the ID of the package to buy  
 * @returns          the server’s purchase response (with updated balance)  
 */
export async function purchase(
  userId: string,
  packageId: string
): Promise<PurchaseResponse> {
  return apiRequest<PurchaseResponse>(ENDPOINTS.purchase, {
    method: 'POST',
    headers: { 'x-user-id': userId },
    body: JSON.stringify({ package: packageId }),
  });
}
