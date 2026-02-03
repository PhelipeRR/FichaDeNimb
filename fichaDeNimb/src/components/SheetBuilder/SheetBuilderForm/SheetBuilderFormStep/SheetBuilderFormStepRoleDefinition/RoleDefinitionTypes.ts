import { Role, SerializedRole } from 't20-sheet-builder';
import { ConfirmFunction } from '../../useSheetBuilderSubmit';

export type RoleComponentProps = {
  confirmRole: ConfirmFunction<Role>;
  storedRole?: SerializedRole;
};
