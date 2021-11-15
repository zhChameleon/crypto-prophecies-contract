/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { LinkTokenInterfaceContract } from "./LinkTokenInterface";
import { VRFCoordinatorMockContract } from "./VRFCoordinatorMock";
import { VRFConsumerBaseContract } from "./VRFConsumerBase";
import { LinkTokenInterfaceContract } from "./LinkTokenInterface";
import { VRFConsumerBaseContract } from "./VRFConsumerBase";
import { OwnableUpgradeableContract } from "./OwnableUpgradeable";
import { ERC1155UpgradeableContract } from "./ERC1155Upgradeable";
import { IERC1155MetadataURIUpgradeableContract } from "./IERC1155MetadataURIUpgradeable";
import { IERC1155ReceiverUpgradeableContract } from "./IERC1155ReceiverUpgradeable";
import { IERC1155UpgradeableContract } from "./IERC1155Upgradeable";
import { IERC20UpgradeableContract } from "./IERC20Upgradeable";
import { ERC165UpgradeableContract } from "./ERC165Upgradeable";
import { IERC165UpgradeableContract } from "./IERC165Upgradeable";
import { OwnableContract } from "./Ownable";
import { IERC1155Contract } from "./IERC1155";
import { ERC20Contract } from "./ERC20";
import { ERC20BurnableContract } from "./ERC20Burnable";
import { ERC20CappedContract } from "./ERC20Capped";
import { IERC20MetadataContract } from "./IERC20Metadata";
import { IERC20Contract } from "./IERC20";
import { ERC721Contract } from "./ERC721";
import { ERC721EnumerableContract } from "./ERC721Enumerable";
import { IERC721EnumerableContract } from "./IERC721Enumerable";
import { IERC721MetadataContract } from "./IERC721Metadata";
import { IERC721Contract } from "./IERC721";
import { IERC721ReceiverContract } from "./IERC721Receiver";
import { ERC165Contract } from "./ERC165";
import { IERC165Contract } from "./IERC165";
import { BonusContract } from "./Bonus";
import { DailyPrizeBackUpContract } from "./DailyPrizeBackUp";
import { DailyPrizeContract } from "./DailyPrize";
import { CryptoPropheciesGameContract } from "./CryptoPropheciesGame";
import { IMPOTContract } from "./IMPOT";
import { IDailyPrizeContract } from "./IDailyPrize";
import { IOrbContract } from "./IOrb";
import { INFTContract } from "./INFT";
import { IProphetContract } from "./IProphet";
import { IERC20Contract } from "./IERC20";
import { VRFConsumerBaseUpgradeableContract } from "./VRFConsumerBaseUpgradeable";
import { BattleContract } from "./Battle";
import { CryptoPropheciesItemContract } from "./CryptoPropheciesItem";
import { CryptoPropheciesProphetContract } from "./CryptoPropheciesProphet";
import { ProphetV2Contract } from "./ProphetV2";
import { ProphetV2StorageContract } from "./ProphetV2Storage";
import { OrbContract } from "./Orb";
import { IItemContract } from "./IItem";
import { INFTContract } from "./INFT";
import { IProphetContract } from "./IProphet";
import { SummoningContract } from "./Summoning";
import { ShopContract } from "./Shop";
import { PoolInitializableContract } from "./PoolInitializable";
import { PoolFactoryContract } from "./PoolFactory";
import { ERC677ReceiverContract } from "./ERC677Receiver";
import { MockLinkContract } from "./MockLink";
import { BTCPContract } from "./BTCP";
import { MagicContract } from "./Magic";
import { TCPContract } from "./TCP";
import { TokenVestingContract } from "./TokenVesting";
import { VestingDetailsContract } from "./VestingDetails";
import { VestingStorageContract } from "./VestingStorage";

declare global {
  namespace Truffle {
    interface Artifacts {
      require(name: "LinkTokenInterface"): LinkTokenInterfaceContract;
      require(name: "VRFCoordinatorMock"): VRFCoordinatorMockContract;
      require(name: "VRFConsumerBase"): VRFConsumerBaseContract;
      require(name: "LinkTokenInterface"): LinkTokenInterfaceContract;
      require(name: "VRFConsumerBase"): VRFConsumerBaseContract;
      require(name: "OwnableUpgradeable"): OwnableUpgradeableContract;
      require(name: "ERC1155Upgradeable"): ERC1155UpgradeableContract;
      require(
        name: "IERC1155MetadataURIUpgradeable"
      ): IERC1155MetadataURIUpgradeableContract;
      require(
        name: "IERC1155ReceiverUpgradeable"
      ): IERC1155ReceiverUpgradeableContract;
      require(name: "IERC1155Upgradeable"): IERC1155UpgradeableContract;
      require(name: "IERC20Upgradeable"): IERC20UpgradeableContract;
      require(name: "ERC165Upgradeable"): ERC165UpgradeableContract;
      require(name: "IERC165Upgradeable"): IERC165UpgradeableContract;
      require(name: "Ownable"): OwnableContract;
      require(name: "IERC1155"): IERC1155Contract;
      require(name: "ERC20"): ERC20Contract;
      require(name: "ERC20Burnable"): ERC20BurnableContract;
      require(name: "ERC20Capped"): ERC20CappedContract;
      require(name: "IERC20Metadata"): IERC20MetadataContract;
      require(name: "IERC20"): IERC20Contract;
      require(name: "ERC721"): ERC721Contract;
      require(name: "ERC721Enumerable"): ERC721EnumerableContract;
      require(name: "IERC721Enumerable"): IERC721EnumerableContract;
      require(name: "IERC721Metadata"): IERC721MetadataContract;
      require(name: "IERC721"): IERC721Contract;
      require(name: "IERC721Receiver"): IERC721ReceiverContract;
      require(name: "ERC165"): ERC165Contract;
      require(name: "IERC165"): IERC165Contract;
      require(name: "Bonus"): BonusContract;
      require(name: "DailyPrizeBackUp"): DailyPrizeBackUpContract;
      require(name: "DailyPrize"): DailyPrizeContract;
      require(name: "CryptoPropheciesGame"): CryptoPropheciesGameContract;
      require(name: "IMPOT"): IMPOTContract;
      require(name: "IDailyPrize"): IDailyPrizeContract;
      require(name: "IOrb"): IOrbContract;
      require(name: "INFT"): INFTContract;
      require(name: "IProphet"): IProphetContract;
      require(name: "IERC20"): IERC20Contract;
      require(
        name: "VRFConsumerBaseUpgradeable"
      ): VRFConsumerBaseUpgradeableContract;
      require(name: "Battle"): BattleContract;
      require(name: "CryptoPropheciesItem"): CryptoPropheciesItemContract;
      require(name: "CryptoPropheciesProphet"): CryptoPropheciesProphetContract;
      require(name: "ProphetV2"): ProphetV2Contract;
      require(name: "ProphetV2Storage"): ProphetV2StorageContract;
      require(name: "Orb"): OrbContract;
      require(name: "IItem"): IItemContract;
      require(name: "INFT"): INFTContract;
      require(name: "IProphet"): IProphetContract;
      require(name: "Summoning"): SummoningContract;
      require(name: "Shop"): ShopContract;
      require(name: "PoolInitializable"): PoolInitializableContract;
      require(name: "PoolFactory"): PoolFactoryContract;
      require(name: "ERC677Receiver"): ERC677ReceiverContract;
      require(name: "MockLink"): MockLinkContract;
      require(name: "BTCP"): BTCPContract;
      require(name: "Magic"): MagicContract;
      require(name: "TCP"): TCPContract;
      require(name: "TokenVesting"): TokenVestingContract;
      require(name: "VestingDetails"): VestingDetailsContract;
      require(name: "VestingStorage"): VestingStorageContract;
    }
  }
}

export {
  LinkTokenInterfaceContract,
  LinkTokenInterfaceInstance,
} from "./LinkTokenInterface";
export {
  VRFCoordinatorMockContract,
  VRFCoordinatorMockInstance,
} from "./VRFCoordinatorMock";
export {
  VRFConsumerBaseContract,
  VRFConsumerBaseInstance,
} from "./VRFConsumerBase";
export {
  LinkTokenInterfaceContract,
  LinkTokenInterfaceInstance,
} from "./LinkTokenInterface";
export {
  VRFConsumerBaseContract,
  VRFConsumerBaseInstance,
} from "./VRFConsumerBase";
export {
  OwnableUpgradeableContract,
  OwnableUpgradeableInstance,
} from "./OwnableUpgradeable";
export {
  ERC1155UpgradeableContract,
  ERC1155UpgradeableInstance,
} from "./ERC1155Upgradeable";
export {
  IERC1155MetadataURIUpgradeableContract,
  IERC1155MetadataURIUpgradeableInstance,
} from "./IERC1155MetadataURIUpgradeable";
export {
  IERC1155ReceiverUpgradeableContract,
  IERC1155ReceiverUpgradeableInstance,
} from "./IERC1155ReceiverUpgradeable";
export {
  IERC1155UpgradeableContract,
  IERC1155UpgradeableInstance,
} from "./IERC1155Upgradeable";
export {
  IERC20UpgradeableContract,
  IERC20UpgradeableInstance,
} from "./IERC20Upgradeable";
export {
  ERC165UpgradeableContract,
  ERC165UpgradeableInstance,
} from "./ERC165Upgradeable";
export {
  IERC165UpgradeableContract,
  IERC165UpgradeableInstance,
} from "./IERC165Upgradeable";
export { OwnableContract, OwnableInstance } from "./Ownable";
export { IERC1155Contract, IERC1155Instance } from "./IERC1155";
export { ERC20Contract, ERC20Instance } from "./ERC20";
export { ERC20BurnableContract, ERC20BurnableInstance } from "./ERC20Burnable";
export { ERC20CappedContract, ERC20CappedInstance } from "./ERC20Capped";
export {
  IERC20MetadataContract,
  IERC20MetadataInstance,
} from "./IERC20Metadata";
export { IERC20Contract, IERC20Instance } from "./IERC20";
export { ERC721Contract, ERC721Instance } from "./ERC721";
export {
  ERC721EnumerableContract,
  ERC721EnumerableInstance,
} from "./ERC721Enumerable";
export {
  IERC721EnumerableContract,
  IERC721EnumerableInstance,
} from "./IERC721Enumerable";
export {
  IERC721MetadataContract,
  IERC721MetadataInstance,
} from "./IERC721Metadata";
export { IERC721Contract, IERC721Instance } from "./IERC721";
export {
  IERC721ReceiverContract,
  IERC721ReceiverInstance,
} from "./IERC721Receiver";
export { ERC165Contract, ERC165Instance } from "./ERC165";
export { IERC165Contract, IERC165Instance } from "./IERC165";
export { BonusContract, BonusInstance } from "./Bonus";
export {
  DailyPrizeBackUpContract,
  DailyPrizeBackUpInstance,
} from "./DailyPrizeBackUp";
export { DailyPrizeContract, DailyPrizeInstance } from "./DailyPrize";
export {
  CryptoPropheciesGameContract,
  CryptoPropheciesGameInstance,
} from "./CryptoPropheciesGame";
export { IMPOTContract, IMPOTInstance } from "./IMPOT";
export { IDailyPrizeContract, IDailyPrizeInstance } from "./IDailyPrize";
export { IOrbContract, IOrbInstance } from "./IOrb";
export { INFTContract, INFTInstance } from "./INFT";
export { IProphetContract, IProphetInstance } from "./IProphet";
export { IERC20Contract, IERC20Instance } from "./IERC20";
export {
  VRFConsumerBaseUpgradeableContract,
  VRFConsumerBaseUpgradeableInstance,
} from "./VRFConsumerBaseUpgradeable";
export { BattleContract, BattleInstance } from "./Battle";
export {
  CryptoPropheciesItemContract,
  CryptoPropheciesItemInstance,
} from "./CryptoPropheciesItem";
export {
  CryptoPropheciesProphetContract,
  CryptoPropheciesProphetInstance,
} from "./CryptoPropheciesProphet";
export { ProphetV2Contract, ProphetV2Instance } from "./ProphetV2";
export {
  ProphetV2StorageContract,
  ProphetV2StorageInstance,
} from "./ProphetV2Storage";
export { OrbContract, OrbInstance } from "./Orb";
export { IItemContract, IItemInstance } from "./IItem";
export { INFTContract, INFTInstance } from "./INFT";
export { IProphetContract, IProphetInstance } from "./IProphet";
export { SummoningContract, SummoningInstance } from "./Summoning";
export { ShopContract, ShopInstance } from "./Shop";
export {
  PoolInitializableContract,
  PoolInitializableInstance,
} from "./PoolInitializable";
export { PoolFactoryContract, PoolFactoryInstance } from "./PoolFactory";
export {
  ERC677ReceiverContract,
  ERC677ReceiverInstance,
} from "./ERC677Receiver";
export { MockLinkContract, MockLinkInstance } from "./MockLink";
export { BTCPContract, BTCPInstance } from "./BTCP";
export { MagicContract, MagicInstance } from "./Magic";
export { TCPContract, TCPInstance } from "./TCP";
export { TokenVestingContract, TokenVestingInstance } from "./TokenVesting";
export {
  VestingDetailsContract,
  VestingDetailsInstance,
} from "./VestingDetails";
export {
  VestingStorageContract,
  VestingStorageInstance,
} from "./VestingStorage";
