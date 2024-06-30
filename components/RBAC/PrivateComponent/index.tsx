interface PrivateComponentProps {
  roleList: string[];
  userRole: string | null | undefined;
  children: JSX.Element | JSX.Element[] | string | number | null | undefined;
}

const PrivateComponent = ({
  roleList,
  children,
  userRole,
}: PrivateComponentProps) => {
  const validationRole = typeof userRole === 'string' ? userRole : '';
  const hasRequiredRole = roleList?.includes(validationRole);

  if (!hasRequiredRole) {
    return null; // Opcionalmente, puedes devolver un mensaje o un componente alternativo en lugar de null.
  }

  return children;
};

export { PrivateComponent };
