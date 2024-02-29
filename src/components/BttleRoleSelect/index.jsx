import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowUp, RoleSelectWrapper, SelectList, SelectMenu } from './styles';
import { ReactComponent as ArrowDown } from '@assets/arrow_down.svg';

const roles = ['동아리', '전체'];

// eslint-disable-next-line no-unused-vars
const BattleRoleSelect = ({ selectedRole, hanldeRole }) => {
  const [isOpen, setIsOpen] = useState(false);

  const roleSelectRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (roleSelectRef.current && !roleSelectRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, [roleSelectRef]);

  const handleRoleClick = useCallback(
    (role) => {
      setIsOpen(false);
      hanldeRole(role);
    },
    [selectedRole]
  );

  return (
    <RoleSelectWrapper ref={roleSelectRef}>
      <SelectMenu
        onClick={() => setIsOpen(!isOpen)}
        selected={selectedRole}
        isopen={isOpen.toString()}
      >
        <p>{selectedRole ? selectedRole : '참가 권한'}</p>
        {isOpen ? <ArrowUp /> : <ArrowDown />}
      </SelectMenu>
      {isOpen && (
        <SelectList>
          {
            <ul>
              {roles.map((role, index) => (
                <li
                  key={index}
                  role='presentation'
                  onClick={() => handleRoleClick(role)}
                >
                  {role}
                </li>
              ))}
            </ul>
          }
        </SelectList>
      )}
    </RoleSelectWrapper>
  );
};

export default BattleRoleSelect;
