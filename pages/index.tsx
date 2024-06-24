import React from 'react';
import matchRoles from 'utils/matchRoles';
import safeJsonStringify from 'safe-json-stringify';

export async function getServerSideProps(ctx) {
  const { rejected, isPublic, page } = await matchRoles(ctx);
  return {
    props: { rejected, isPublic, page: JSON.parse(safeJsonStringify(page)) },
  };
}

function Index() {
  return <div>hola</div>;
}

export default Index;
