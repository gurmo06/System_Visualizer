export type Opcode = "ADD"

export interface Instruction
{
    op: Opcode;         // Instruction opcode
    rd?: number;            // Destination register
    rn?: number;            // Source 1 register
    rm?: number;            // Source 2 register
    imm?: number;           // Immediate value
}

export interface CPUState
{
    regs: number[];    // Array of registers (X0 - X30) and XZR/SP (X31)
    pc: number;             // Program counter
    halt: boolean;         // Indicates if the CPU is stalled (temporary)
}