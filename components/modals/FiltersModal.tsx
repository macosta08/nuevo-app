import React from 'react';
import Modal from '@components/modals/Modal';
import Button from '@components/buttons/Buttons';
import Loading from '@components/Loading';
import InputText from '@components/inputs/inputText';
import InputNumber from '@components/inputs/inputNumber/InputNumber';
import SelectInput from '@components/inputs/inputSelect';
import Link from 'next/link';

function FiltersModal({
  open,
  setOpen,
  loading,
  rolesOption,
  onChange,
  onClick,
  setSelectedRole,
  selectedValue,
}) {
  return (
    <Modal open={open} setOpen={setOpen} modalTitle='Filtros'>
      <div className='flex flex-col md:flex md:flex-row md:gap-16'>
        <div className='mb-6 md:mb-10'>
          <InputText
            type='text'
            name='name'
            label='Nombre Completo'
            placeholder='Nombre'
            extraClassNames='font-secondaryFont mb-6'
            onChange={onChange}
          />

          <InputNumber
            name='id'
            label='Cédula'
            placeholder='Cédula'
            thousandSeparator={false}
            extraClassNames='font-secondaryFont mb-4'
            onChange={onChange}
          />
        </div>
        <div className='mb-8'>
          <InputText
            type='email'
            name='Email'
            label='Correo electrónico'
            placeholder='email'
            extraClassNames='font-secondaryFont mb-6'
            onChange={onChange}
          />
          <SelectInput
            opts={rolesOption}
            placeholder='Seleccionar el rol'
            selectName='roles'
            text='Rol'
            isClearable
            setSelected={(selected): void => setSelectedRole(selected)}
            selectedValue={selectedValue}
          />
        </div>
      </div>
      <div className='flex flex-col space-y-4 md:px-3'>
        <div className='flex gap-6 md:justify-around'>
          <Button
            text='Filtrar'
            type='submit'
            priority='secundary'
            size='small'
            onClick={onClick}
          />
          <Link href='/admin/users'>
            <Button
              text='Cancelar'
              type='submit'
              priority='third'
              size='small'
              onClick={() => setOpen(!open)}
            />
          </Link>
          {loading && <Loading open />}
        </div>
      </div>
    </Modal>
  );
}

export default FiltersModal;
