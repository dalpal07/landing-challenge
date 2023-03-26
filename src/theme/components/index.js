import {isFunction, mapValues} from 'lodash';

import FabOverrides from './Overrides/FloatingActionButton';
import FormControlOverrides from './Overrides/FormControl';
import ButtonOverrides from './Overrides/Button';
import MenuOverrides from './Overrides/Menu';
import SelectOverrides from './Overrides/Select';
import TextFieldOverrides from './Overrides/TextField';
import MenuItemOverrides from './Overrides/MenuItem';
import SvgIconOverrides from './Overrides/SvgIcon';
import ChipOverrides from './Overrides/Chip';
import OutlinedInputOverrides from './Overrides/OutlinedInput';
import PaperOverrides from './Overrides/Paper';
import MuiTabsOverrides from './Overrides/Tabs';
import MuiTabOverrides from './Overrides/Tab';
import AutocompleteOverrides from './Overrides/Autocomplete';
import TooltipOverrides from './Overrides/Tooltip';
import TypographyOverrides from './Overrides/Typography';
import LoadingButtonOverrides from './Overrides/LoadingButton';

const components = theme => {
  return mapValues({
    MuiButton: ButtonOverrides,
    MuiLoadingButton: LoadingButtonOverrides,
    MuiFab: FabOverrides,
    MuiFormControl: FormControlOverrides,
    MuiMenu: MenuOverrides,
    MuiMenuItem: MenuItemOverrides,
    MuiSelect: SelectOverrides,
    MuiTextField: TextFieldOverrides,
    MuiSvgIcon: SvgIconOverrides,
    MuiChip: ChipOverrides,
    MuiOutlinedInput: OutlinedInputOverrides,
    MuiPaper: PaperOverrides,
    MuiTabs: MuiTabsOverrides,
    MuiTab: MuiTabOverrides,
    MuiAutocomplete: AutocompleteOverrides,
    MuiTooltip: TooltipOverrides,
    MuiTypography: TypographyOverrides,
  }, override => {
    if (isFunction(override)) {
      return override(theme);
    }
    return override;
  });
};

export default components;