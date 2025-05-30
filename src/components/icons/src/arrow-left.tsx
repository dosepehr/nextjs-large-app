import BaseIcon from '@/components/icons/baseIcon';
import { SvgIconType } from '@/components/icons/icon.types'; 

export default function SvgIcon(props:SvgIconType) {
  return (
    <BaseIcon {...props}>
      <path d="M4.01001 11.9805H19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M10.013 5.98828L4.00201 12.0003L10.013 18.0123" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </BaseIcon>
  );
}