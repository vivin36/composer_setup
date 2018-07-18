import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.opensource.token{
   export class Token extends Asset {
      token: string;
      tokenName: string;
      tokenQuantity: number;
   }
// }
