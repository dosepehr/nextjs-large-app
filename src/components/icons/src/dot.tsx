import BaseIcon from '@/components/icons/baseIcon';
import { SvgIconType } from '@/components/icons/icon.types'; 

export default function SvgIcon(props:SvgIconType) {
  return (
    <BaseIcon {...props}>
      <circle cx="3.5779" cy="3.2879" r="2.7487"/>
    </BaseIcon>
  );
}