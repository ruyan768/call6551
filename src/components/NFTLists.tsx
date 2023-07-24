import { ThirdwebNftMedia, useContract, useNFT } from "@thirdweb-dev/react";
import Image from 'next/image'

export function NFTLists() {
    const { contract } = useContract(
        "0x789e35a999c443fe6089544056f728239b8ffee7"
    );
    const { data: nft, isLoading, error } = useNFT(contract, "2106");

    if (isLoading) return <div>Loading...</div>;
    if (error || !nft) return <div>NFT not found</div>;

    return <Image src={nft.metadata.image ?? ""} alt={String(nft.metadata.name)} width={500} height={500} />;
}