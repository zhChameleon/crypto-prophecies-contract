/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface OrbContract extends Truffle.Contract<OrbInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<OrbInstance>;
}

export interface ApprovalForAll {
  name: "ApprovalForAll";
  args: {
    account: string;
    operator: string;
    approved: boolean;
    0: string;
    1: string;
    2: boolean;
  };
}

export interface Creators {
  name: "Creators";
  args: {
    tokenId: BN;
    value: string;
    0: BN;
    1: string;
  };
}

export interface OwnershipTransferred {
  name: "OwnershipTransferred";
  args: {
    previousOwner: string;
    newOwner: string;
    0: string;
    1: string;
  };
}

export interface Supply {
  name: "Supply";
  args: {
    tokenId: BN;
    value: BN;
    0: BN;
    1: BN;
  };
}

export interface TransferBatch {
  name: "TransferBatch";
  args: {
    operator: string;
    from: string;
    to: string;
    ids: BN[];
    values: BN[];
    0: string;
    1: string;
    2: string;
    3: BN[];
    4: BN[];
  };
}

export interface TransferSingle {
  name: "TransferSingle";
  args: {
    operator: string;
    from: string;
    to: string;
    id: BN;
    value: BN;
    0: string;
    1: string;
    2: string;
    3: BN;
    4: BN;
  };
}

export interface URI {
  name: "URI";
  args: {
    value: string;
    id: BN;
    0: string;
    1: BN;
  };
}

type AllEvents =
  | ApprovalForAll
  | Creators
  | OwnershipTransferred
  | Supply
  | TransferBatch
  | TransferSingle
  | URI;

export interface OrbInstance extends Truffle.ContractInstance {
  balanceOf(
    account: string,
    id: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  balanceOfBatch(
    accounts: string[],
    ids: (number | BN | string)[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN[]>;

  creators(
    arg0: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  initialize: {
    (_uri: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(_uri: string, txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(
      _uri: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _uri: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  isApprovedForAll(
    account: string,
    operator: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  mint: {
    (
      account: string,
      id: number | BN | string,
      amount: number | BN | string,
      maximum: number | BN | string,
      tokenUri: string,
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      account: string,
      id: number | BN | string,
      amount: number | BN | string,
      maximum: number | BN | string,
      tokenUri: string,
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      account: string,
      id: number | BN | string,
      amount: number | BN | string,
      maximum: number | BN | string,
      tokenUri: string,
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      account: string,
      id: number | BN | string,
      amount: number | BN | string,
      maximum: number | BN | string,
      tokenUri: string,
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  minted(
    arg0: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  orbData(
    orbId: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ 0: BN; 1: string; 2: BN; 3: BN; 4: BN; 5: BN; 6: BN }>;

  orbGenId(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

  renounceOwnership: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  safeBatchTransferFrom: {
    (
      from: string,
      to: string,
      ids: (number | BN | string)[],
      amounts: (number | BN | string)[],
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      from: string,
      to: string,
      ids: (number | BN | string)[],
      amounts: (number | BN | string)[],
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      from: string,
      to: string,
      ids: (number | BN | string)[],
      amounts: (number | BN | string)[],
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      from: string,
      to: string,
      ids: (number | BN | string)[],
      amounts: (number | BN | string)[],
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  safeTransferFrom: {
    (
      from: string,
      to: string,
      id: number | BN | string,
      amount: number | BN | string,
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      from: string,
      to: string,
      id: number | BN | string,
      amount: number | BN | string,
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      from: string,
      to: string,
      id: number | BN | string,
      amount: number | BN | string,
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      from: string,
      to: string,
      id: number | BN | string,
      amount: number | BN | string,
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setApprovalForAll: {
    (
      operator: string,
      approved: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      operator: string,
      approved: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      operator: string,
      approved: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      operator: string,
      approved: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setGenerationId: {
    (
      _id: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _id: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _id: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _id: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setMinter: {
    (
      _address: string,
      _isMinter: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _address: string,
      _isMinter: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _address: string,
      _isMinter: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _address: string,
      _isMinter: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setOrbData: {
    (
      _orbId: number | BN | string,
      _orbType: number | BN | string,
      _name: string,
      _common: number | BN | string,
      _uncommon: number | BN | string,
      _rare: number | BN | string,
      _epic: number | BN | string,
      _legendary: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _orbId: number | BN | string,
      _orbType: number | BN | string,
      _name: string,
      _common: number | BN | string,
      _uncommon: number | BN | string,
      _rare: number | BN | string,
      _epic: number | BN | string,
      _legendary: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _orbId: number | BN | string,
      _orbType: number | BN | string,
      _name: string,
      _common: number | BN | string,
      _uncommon: number | BN | string,
      _rare: number | BN | string,
      _epic: number | BN | string,
      _legendary: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _orbId: number | BN | string,
      _orbType: number | BN | string,
      _name: string,
      _common: number | BN | string,
      _uncommon: number | BN | string,
      _rare: number | BN | string,
      _epic: number | BN | string,
      _legendary: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setSupply: {
    (
      _tokenId: number | BN | string,
      _supply: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _tokenId: number | BN | string,
      _supply: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _tokenId: number | BN | string,
      _supply: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _tokenId: number | BN | string,
      _supply: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  supply(
    arg0: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  supportsInterface(
    interfaceId: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  tokenURI(
    tokenId: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  transferOwnership: {
    (newOwner: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  uri(
    arg0: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  methods: {
    balanceOf(
      account: string,
      id: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    balanceOfBatch(
      accounts: string[],
      ids: (number | BN | string)[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN[]>;

    creators(
      arg0: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    initialize: {
      (_uri: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(_uri: string, txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(
        _uri: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _uri: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    isApprovedForAll(
      account: string,
      operator: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    mint: {
      (
        account: string,
        id: number | BN | string,
        amount: number | BN | string,
        maximum: number | BN | string,
        tokenUri: string,
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        account: string,
        id: number | BN | string,
        amount: number | BN | string,
        maximum: number | BN | string,
        tokenUri: string,
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        account: string,
        id: number | BN | string,
        amount: number | BN | string,
        maximum: number | BN | string,
        tokenUri: string,
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        account: string,
        id: number | BN | string,
        amount: number | BN | string,
        maximum: number | BN | string,
        tokenUri: string,
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    minted(
      arg0: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    orbData(
      orbId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ 0: BN; 1: string; 2: BN; 3: BN; 4: BN; 5: BN; 6: BN }>;

    orbGenId(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

    renounceOwnership: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    safeBatchTransferFrom: {
      (
        from: string,
        to: string,
        ids: (number | BN | string)[],
        amounts: (number | BN | string)[],
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        from: string,
        to: string,
        ids: (number | BN | string)[],
        amounts: (number | BN | string)[],
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        from: string,
        to: string,
        ids: (number | BN | string)[],
        amounts: (number | BN | string)[],
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        from: string,
        to: string,
        ids: (number | BN | string)[],
        amounts: (number | BN | string)[],
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    safeTransferFrom: {
      (
        from: string,
        to: string,
        id: number | BN | string,
        amount: number | BN | string,
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        from: string,
        to: string,
        id: number | BN | string,
        amount: number | BN | string,
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        from: string,
        to: string,
        id: number | BN | string,
        amount: number | BN | string,
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        from: string,
        to: string,
        id: number | BN | string,
        amount: number | BN | string,
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setApprovalForAll: {
      (
        operator: string,
        approved: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        operator: string,
        approved: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        operator: string,
        approved: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        operator: string,
        approved: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setGenerationId: {
      (
        _id: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _id: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _id: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _id: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setMinter: {
      (
        _address: string,
        _isMinter: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _address: string,
        _isMinter: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _address: string,
        _isMinter: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _address: string,
        _isMinter: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setOrbData: {
      (
        _orbId: number | BN | string,
        _orbType: number | BN | string,
        _name: string,
        _common: number | BN | string,
        _uncommon: number | BN | string,
        _rare: number | BN | string,
        _epic: number | BN | string,
        _legendary: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _orbId: number | BN | string,
        _orbType: number | BN | string,
        _name: string,
        _common: number | BN | string,
        _uncommon: number | BN | string,
        _rare: number | BN | string,
        _epic: number | BN | string,
        _legendary: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _orbId: number | BN | string,
        _orbType: number | BN | string,
        _name: string,
        _common: number | BN | string,
        _uncommon: number | BN | string,
        _rare: number | BN | string,
        _epic: number | BN | string,
        _legendary: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _orbId: number | BN | string,
        _orbType: number | BN | string,
        _name: string,
        _common: number | BN | string,
        _uncommon: number | BN | string,
        _rare: number | BN | string,
        _epic: number | BN | string,
        _legendary: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setSupply: {
      (
        _tokenId: number | BN | string,
        _supply: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _tokenId: number | BN | string,
        _supply: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _tokenId: number | BN | string,
        _supply: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _tokenId: number | BN | string,
        _supply: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    supply(
      arg0: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    supportsInterface(
      interfaceId: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    tokenURI(
      tokenId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    transferOwnership: {
      (newOwner: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    uri(
      arg0: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}
