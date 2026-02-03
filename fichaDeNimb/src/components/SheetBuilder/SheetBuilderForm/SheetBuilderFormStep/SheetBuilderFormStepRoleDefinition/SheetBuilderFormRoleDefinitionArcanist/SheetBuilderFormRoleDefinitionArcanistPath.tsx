import React from 'react';
import { useArcanistFormContext } from './SheetBuilderFormRoleDefinitionArcanistContext';
import ArcanistPathSelect from './ArcanistPathSelect';

const SheetBuilderFormRoleDefinitionArcanistPath: React.FC = () => {
  const { path, selectPath } = useArcanistFormContext();
  return <ArcanistPathSelect path={path} setPath={selectPath} />;
};

export default SheetBuilderFormRoleDefinitionArcanistPath;
