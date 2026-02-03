import { enqueueSnackbar } from 'notistack';
import { useCallback } from 'react';

export interface RollGroup {
  label: string;
  diceNotation: string;
  rolls: number[];
  modifier: number;
  total: number;
  isCritical?: boolean;
  isFumble?: boolean;
  damageType?: string;
}

export const useDiceRoll = () => {
  const showDiceResult = useCallback(
    (label: string, rollGroups: RollGroup[], characterName?: string) => {
      // Check if it's an attack roll (contains 'Ataque' in label)
      const isAttack = label.toLowerCase().includes('ataque');

      // Use different variants for different types of rolls
      if (isAttack) {
        // Find attack and damage components if they exist
        // This is a simplified logic - in a real app you might want structured data
        const attackRoll = rollGroups.find((r) =>
          r.label.toLowerCase().includes('ataque')
        );

        if (attackRoll) {
          enqueueSnackbar(label, {
            variant: 'attackRoll',
            // Pass data to custom snackbar component
            attackResult: {
              characterName: characterName || 'Personagem',
              attackRoll: {
                total: attackRoll.total,
                result: attackRoll.total,
                critical:
                  attackRoll.rolls.length > 0 && attackRoll.rolls[0] === 20, // Simple crit check
                fumble:
                  attackRoll.rolls.length > 0 && attackRoll.rolls[0] === 1,
              },
              // We might not have damage here if it's just an attack roll
              damageRoll: undefined,
              name: label,
            },
            attack: {
              name: label,
            },
            persist: true,
          } as any); // eslint-disable-line @typescript-eslint/no-explicit-any
          return;
        }
      }

      // Default dice roll display
      // If we have multiple groups, we might want to show them all
      // For now, let's just show the first one or a summary

      // If it's a single roll, use diceRoll variant
      if (rollGroups.length === 1) {
        const roll = rollGroups[0];
        enqueueSnackbar(label, {
          variant: 'diceRoll',
          roll: {
            total: roll.total,
            rolls: roll.rolls,
            modifier: roll.modifier,
            label: roll.label,
            diceNotation: roll.diceNotation,
          },
          persist: true, // Let user dismiss
        } as any); // eslint-disable-line @typescript-eslint/no-explicit-any
      } else {
        // Multiple rolls
        enqueueSnackbar(label, {
          variant: 'info',
          message: `${label}: ${rollGroups
            .map((r) => `${r.label}: ${r.total}`)
            .join(', ')}`,
          persist: true,
        } as any); // eslint-disable-line @typescript-eslint/no-explicit-any
      }
    },
    []
  );

  return { showDiceResult };
};
