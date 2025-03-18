import BaseIcon from '@/components/icons/baseIcon';
import { SvgIconType } from '@/components/icons/icon.types'; 

export default function SvgIcon(props:SvgIconType) {
  return (
    <BaseIcon {...props}>
      <path d="M7.505 3L16.5 12.027L7.5 21"/>
    </BaseIcon>
  );
}