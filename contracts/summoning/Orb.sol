// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

import "@openzeppelin/contracts-upgradeable/token/ERC1155/ERC1155Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract Orb is ERC1155Upgradeable, OwnableUpgradeable {
    enum OrbType {
        STONE,
        CUBE,
        DIAMOND,
        CAPE,
        EGG
    }

    struct OrbInfo {
        OrbType variety;
        string name;
        uint16 common;
        uint16 uncommon;
        uint16 rare;
        uint16 epic;
        uint16 legendary;
        uint16 generation;
    }

    event Supply(uint256 indexed tokenId, uint256 value);
    event Creators(uint256 indexed tokenId, address indexed value);

    uint16 public orbGenId;
    mapping(uint256 => address) public creators;
    mapping(uint256 => uint256) public supply;
    mapping(uint256 => uint256) public minted;
    mapping(uint256 => string) private tokenURIs;
    mapping(uint256 => OrbInfo) private orbs;
    mapping(address => bool) private minters;

    modifier onlyMinter() {
        require(minters[_msgSender()], "Invalid minter");
        _;
    }

    function initialize(string memory _uri) public initializer {
        minters[_msgSender()] = true;
        __Ownable_init();
        __ERC1155_init(_uri);
        __ERC1155_init_unchained(_uri);
    }

    function mint(
        address account,
        uint256 id,
        uint256 amount,
        uint256 maximum,
        string memory tokenUri,
        bytes memory data
    ) external onlyMinter {
        require(maximum > 0, "supply incorrect");
        require(amount > 0, "amount incorrect");

        if (supply[id] == 0) {
            _saveSupply(id, maximum);
            _saveCreator(id, _msgSender());
        }

        uint256 newMinted = amount + minted[id];
        require(newMinted <= supply[id], "more than supply");
        minted[id] = newMinted;

        require(creators[id] == _msgSender(), "different creator");

        _setTokenURI(id, tokenUri);
        _mint(account, id, amount, data);
    }

    function setOrbData(
        uint256 _orbId,
        OrbType _orbType,
        string memory _name,
        uint16 _common,
        uint16 _uncommon,
        uint16 _rare,
        uint16 _epic,
        uint16 _legendary
    ) external onlyOwner {
        _setOrbData(
            _orbId,
            _orbType,
            _name,
            _common,
            _uncommon,
            _rare,
            _epic,
            _legendary
        );
    }

    function setGenerationId(uint16 _id) external onlyOwner {
        require(orbGenId < _id, "invalid generation id");
        orbGenId = _id;
    }

    function setMinter(address _address, bool _isMinter) external onlyOwner {
        minters[_address] = _isMinter;
    }

    function setSupply(uint256 _tokenId, uint256 _supply) external onlyOwner {
        require(_supply != 0, "supply can't be zero");
        _saveSupply(_tokenId, _supply);
    }

    function tokenURI(uint256 tokenId) external view returns (string memory) {
        return tokenURIs[tokenId];
    }

    function orbData(uint256 orbId)
        external
        view
        returns (
            OrbType,
            string memory,
            uint16,
            uint16,
            uint16,
            uint16,
            uint16
        )
    {
        return (
            orbs[orbId].variety,
            orbs[orbId].name,
            orbs[orbId].common,
            orbs[orbId].uncommon,
            orbs[orbId].rare,
            orbs[orbId].epic,
            orbs[orbId].legendary
        );
    }

    function _setOrbData(
        uint256 _orbId,
        OrbType _orbType,
        string memory _name,
        uint16 _common,
        uint16 _uncommon,
        uint16 _rare,
        uint16 _epic,
        uint16 _legendary
    ) internal {
        bytes memory emptyStringTest = bytes(tokenURIs[_orbId]);
        if (emptyStringTest.length == 0) {
            revert("invalid orb id");
        }
        orbs[_orbId] = OrbInfo(
            _orbType,
            _name,
            _common,
            _uncommon,
            _rare,
            _epic,
            _legendary,
            orbGenId
        );
    }

    function _saveSupply(uint256 _tokenId, uint256 _supply) internal {
        require(supply[_tokenId] == 0);
        supply[_tokenId] = _supply;
        emit Supply(_tokenId, _supply);
    }

    function _saveCreator(uint256 _tokenId, address _creator) internal {
        creators[_tokenId] = _creator;
        emit Creators(_tokenId, _creator);
    }

    function _setTokenURI(uint256 tokenId, string memory tokenUri)
        internal
        virtual
    {
        tokenURIs[tokenId] = tokenUri;
    }
}
