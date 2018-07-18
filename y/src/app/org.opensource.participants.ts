import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.opensource.participants{
   export abstract class tokenParticipant extends Participant {
      participantKey: string;
   }
   export class NetWorkAdmin extends tokenParticipant {
      tokenParticipant: string;
   }
   export class personal extends Participant {
      tokenParticipant: string;
   }
// }
