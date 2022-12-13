import { PublicKey, Connection, LAMPORTS_PER_SOL } from '@solana/web3.js';

export const airdrop = async (address: string, amount: number) => {
  const publicKey = new PublicKey(address);
  const conn = new Connection('https://api.devnet.solana.com', 'confirmed');
  const signature = await conn.requestAirdrop(
    publicKey,
    amount * LAMPORTS_PER_SOL
  );
  await conn.confirmTransaction(signature);
};

airdrop('9sUhUoXPjiV94AuUnqhZrLRwXP3xLXGfs5wdsUQHrtPm', 1);
// '4iWByPXW7e1AiArsRvpRESoAkQ2ubvSsjfK4FKWWak2m';
