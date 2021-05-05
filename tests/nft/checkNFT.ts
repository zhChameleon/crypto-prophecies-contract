import BN from 'bn.js';
import { toWei, fromWei } from 'web3-utils';
import { expect } from 'chai';
import { TOKEN_CAP, TOKEN_NAME, TOKEN_SYMBOL } from "../helpers/constants";

export default async function suite() {
  describe('tcp token details', async () => {

    let tokenCapRequirement = new BN(toWei(TOKEN_CAP));

    beforeEach(async function () {
      
    });

    it('Can mint correctly', async function () {
      //(uint8 generation, uint8 rarity, uint8 race, uint8 character
      let id = await this.nft._createProphet(1, 3, 2, 5, this.owner);
    });

  });
}