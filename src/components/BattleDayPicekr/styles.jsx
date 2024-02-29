import styled from 'styled-components';
import { DayPicker } from 'react-day-picker';

export const PickerWrapper = styled.div`
  visibility: ${(props) => props.visible === 'false' && 'hidden'};
`;

export const StyledDayPicker = styled(DayPicker)`
  position: absolute;
  top: 45%;
  left: calc(50% - 16px);
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border: 1px solid #000;
  border-radius: 12px;

  --rdp-accent-color: #1e1e1e !important;
  --rdp-background-color: none !important;

  .rdp-months {
    margin: 12px;

    .rdp-head {
      font-family: 'NanumSquare Neo variable';
      font-size: 20px;
    }

    .rdp-tbody {
      font-family: 'NanumSquare Neo variable';
      font-weight: 300;
      font-size: 16px;

      .rdp-day_today {
        font-weight: 300;
        font-size: 16px;
      }
    }
  }
`;
