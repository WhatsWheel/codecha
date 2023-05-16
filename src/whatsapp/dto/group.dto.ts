export class CreateGroupDto {
  subject: string;
  description?: string;
  participants: string[];
}

export class GroupPictureDto {
  groupJid: string;
  image: string;
}

export class GroupJid {
  groupJid: string;
}

export class GroupInvite {
  inviteCode: string;
}

export class GroupUpdateParticipantDto extends GroupJid {
  action: 'add' | 'remove' | 'promote' | 'demote';
  participants: string[];
}

export class GroupUpdateSettingDto extends GroupJid {
  action: 'announcement' | 'not_announcement' | 'unlocked' | 'locked';
}

export class GroupToggleEphemeralDto extends GroupJid {
  expiration: 0 | 86400 | 604800 | 7776000;
}
