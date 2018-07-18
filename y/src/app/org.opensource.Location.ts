import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
import {Token} from './org.opensource.token';
// export namespace org.opensource.Location{
   export class location extends Asset {
      locationID: string;
      tokenID: Token;
      createdDate: Date;
      tokens: string[];
   }
// }
