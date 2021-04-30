/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface ProphetV2StorageContract
  extends Truffle.Contract<ProphetV2StorageInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<ProphetV2StorageInstance>;
}

type AllEvents = never;

export interface ProphetV2StorageInstance extends Truffle.ContractInstance {
  prophetCharacter(
    arg0: number | BN | string,
    arg1: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  prophetCharacterCounter(
    arg0: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  prophetCounter(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  prophetData(
    arg0: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ 0: BN; 1: BN; 2: BN; 3: BN }>;

  prophetGenerationCounter(
    arg0: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  prophetRace(
    arg0: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  prophetRaceCounter(
    arg0: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  prophetRarities(
    arg0: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  prophetRarityCounter(
    arg0: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  prophetRarityPerRaceCounter(
    arg0: number | BN | string,
    arg1: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  methods: {
    prophetCharacter(
      arg0: number | BN | string,
      arg1: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    prophetCharacterCounter(
      arg0: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    prophetCounter(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    prophetData(
      arg0: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ 0: BN; 1: BN; 2: BN; 3: BN }>;

    prophetGenerationCounter(
      arg0: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    prophetRace(
      arg0: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    prophetRaceCounter(
      arg0: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    prophetRarities(
      arg0: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    prophetRarityCounter(
      arg0: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    prophetRarityPerRaceCounter(
      arg0: number | BN | string,
      arg1: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
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
