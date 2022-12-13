import { Connection, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';

export const showBalance = async (publicKey: PublicKey) => {
  const connection = new Connection(
    'https://api.devnet.solana.com',
    'confirmed'
  );
  const response = await connection.getAccountInfo(publicKey);
  return response.lamports / LAMPORTS_PER_SOL;
};

(async () => {
  const balance = await showBalance(
    new PublicKey('9sUhUoXPjiV94AuUnqhZrLRwXP3xLXGfs5wdsUQHrtPm')
  );
  console.log(balance);
})();
