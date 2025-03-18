import BaseIcon from '@/components/icons/baseIcon';
import { SvgIconType } from '@/components/icons/icon.types'; 

export default function SvgIcon(props:SvgIconType) {
  return (
    <BaseIcon {...props}>
      <path d="M17.657 6.34302C20.781 9.46702 20.781 14.533 17.657 17.657C14.533 20.781 9.467 20.781 6.343 17.657C3.219 14.533 3.219 9.46702 6.343 6.34302"/><path d="M12 4V12"/>
    </BaseIcon>
  );
}