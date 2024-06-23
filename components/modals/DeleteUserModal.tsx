import React from 'react';
import Modal from '@components/modals/Modal';
import Button from '@components/buttons/Buttons';
import Loading from '@components/Loading';

function DeleteUserModal({ open, setOpen, deleteUser, loading }) {
  return (
    <Modal open={open} setOpen={setOpen}>
      <div className='flex  h-[160px] w-[250px] flex-col justify-center space-y-4 px-3'>
        <p className='text-center'>¿Desea eliminar el usuario?</p>
        <div className='flex flex-col justify-around gap-y-2'>
          <Button
            type='submit'
            priority='secundary'
            size='small'
            extraClassName='w-auto'
            onClick={deleteUser}
          >
            Eliminar
          </Button>
          <Button
            type='submit'
            priority='third'
            size='medium'
            extraClassName='w-auto'
            onClick={() => setOpen(!open)}
          >
            Cancelar
          </Button>
          {loading && <Loading open />}
        </div>
      </div>
    </Modal>
  );
}

export default DeleteUserModal;
