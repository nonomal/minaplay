import { InjectionToken, ModuleMetadata, ValueProvider } from '@nestjs/common';
import { Argument, Command, Option } from 'commander';
import { PluginControl } from './plugin-control.js';
import { MinaPlayMessage } from '../../common/application.message.js';

export interface MinaPlayPluginMetadata extends Pick<ModuleMetadata, 'imports' | 'providers'> {
  id: string;
  version?: string;
  description?: string;
  author?: string;
  repo?: string;
}

export interface MinaPlayPluginHooks {
  onEnabled?(): any;

  onDisabled?(): any;
}

export interface MinaPlayPluginMessage {
  control: PluginControl;
  messages: MinaPlayMessage[];
}

export interface MinaPlayMessagePreprocessor {
  injects?: InjectionToken[];
  factory: (...args: any) => ValueProvider[] | undefined | Promise<ValueProvider[] | undefined>;
}
export interface MinaPlayMessageValidator {
  injects?: InjectionToken[];
  factory: (...args: any) => boolean | Promise<boolean>;
}

export interface MinaPlayParamMetadata {
  index: number;
  token: InjectionToken;
}

export interface MinaPlayMessageListenerMetadata {
  preprocessors: MinaPlayMessagePreprocessor[];
  validators: MinaPlayMessageValidator[];
  type: Function;
  key: string | symbol;
  params: MinaPlayParamMetadata[];
}

export interface MinaPlayMessageListenerOptions {
  preprocessors?: MinaPlayMessagePreprocessor[];
  validators?: MinaPlayMessageValidator[];
}

export interface MinaPlayCommanderArgMetadata {
  index: number;
  instance: Option | Argument;
}

export interface MinaPlayCommandMetadata {
  program: Command;
  subcommands?: Map<string, MinaPlayCommandMetadata>;
}

export interface MinaPlayCommandOptions extends MinaPlayMessageListenerOptions {
  aliases?: string[];
  description?: string;
  parents?: string[];
  factory?: (program: Command) => Command;
}

export interface MinaPlayCommandOptionOptions {
  description?: string;
  default?: any;
  factory?: (option: Option) => Option;
}

export interface MinaPlayCommandArgumentOptions {
  description?: string;
  required?: boolean;
  default?: any;
  factory?: (option: Argument) => Argument;
}