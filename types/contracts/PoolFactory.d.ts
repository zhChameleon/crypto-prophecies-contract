/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface PoolFactoryContract
  extends Truffle.Contract<PoolFactoryInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<PoolFactoryInstance>;
}

export interface NewPoolContract {
  name: "NewPoolContract";
  args: {
    pool: string;
    0: string;
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

type AllEvents = NewPoolContract | OwnershipTransferred;

export interface PoolFactoryInstance extends Truffle.ContractInstance {
  deployPool: {
    (
      _stakedToken: string,
      _rewardToken: string,
      _rewardHolder: string,
      _rewardPerBlock: number | BN | string,
      _startBlock: number | BN | string,
      _bonusEndBlock: number | BN | string,
      _admin: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _stakedToken: string,
      _rewardToken: string,
      _rewardHolder: string,
      _rewardPerBlock: number | BN | string,
      _startBlock: number | BN | string,
      _bonusEndBlock: number | BN | string,
      _admin: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _stakedToken: string,
      _rewardToken: string,
      _rewardHolder: string,
      _rewardPerBlock: number | BN | string,
      _startBlock: number | BN | string,
      _bonusEndBlock: number | BN | string,
      _admin: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _stakedToken: string,
      _rewardToken: string,
      _rewardHolder: string,
      _rewardPerBlock: number | BN | string,
      _startBlock: number | BN | string,
      _bonusEndBlock: number | BN | string,
      _admin: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getPoolAddress(
    _stakedToken: string,
    _rewardToken: string,
    _startBlock: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

  renounceOwnership: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

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

  methods: {
    deployPool: {
      (
        _stakedToken: string,
        _rewardToken: string,
        _rewardHolder: string,
        _rewardPerBlock: number | BN | string,
        _startBlock: number | BN | string,
        _bonusEndBlock: number | BN | string,
        _admin: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _stakedToken: string,
        _rewardToken: string,
        _rewardHolder: string,
        _rewardPerBlock: number | BN | string,
        _startBlock: number | BN | string,
        _bonusEndBlock: number | BN | string,
        _admin: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _stakedToken: string,
        _rewardToken: string,
        _rewardHolder: string,
        _rewardPerBlock: number | BN | string,
        _startBlock: number | BN | string,
        _bonusEndBlock: number | BN | string,
        _admin: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _stakedToken: string,
        _rewardToken: string,
        _rewardHolder: string,
        _rewardPerBlock: number | BN | string,
        _startBlock: number | BN | string,
        _bonusEndBlock: number | BN | string,
        _admin: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    getPoolAddress(
      _stakedToken: string,
      _rewardToken: string,
      _startBlock: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

    renounceOwnership: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

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