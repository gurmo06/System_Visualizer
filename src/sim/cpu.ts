import type { CPUState, Instruction } from "./types";

export class CPU
{
    private program: Instruction[];     // Program loaded into the CPU, shouldn't change during execution
    private state: CPUState;            // Current state of the CPU, changes during execution

    // Initializes the CPU with a program and initial
    // zeroed register values if registers not provided
    constructor(prog: Instruction[], initRegs: number[] = Array(32).fill(0))
    {
        this.program = prog;
        this.state = { regs: [...initRegs], pc: 0, halt: (prog.length === 0) };
    }

    // Returns a read-only snapshot of the current CPU state
    public current_state(): Readonly<CPUState>
    {
        // Return a copy to prevent external mutation
        return { regs: [...this.state.regs], pc: this.state.pc, halt: this.state.halt };
    }

    // Resets the CPU state to initial conditions, can optionally
    // load a new program and initial register values
    public reset_state(prog?: Instruction[], initRegs: number[] = Array(32).fill(0)): void
    {
        // Load new program if provided
        if (prog)
            { this.program = prog; }

        // Reset CPU state
        this.state = { regs: [...initRegs], pc: 0, halt: (this.program.length === 0) };
    }

    // Executes a single instruction cycle
    public step(): void
    {
        // If halted, do nothing
        if (this.state.halt)
            { return; }

        // If PC is out of bounds, halt the CPU
        if (this.state.pc < 0 || this.state.pc >= this.program.length)
            { this.state.halt = true; return; }
        
        const instr = this.program[this.state.pc];
        // TODO: Implement instruction execution logic here
        // switch (instr.op)
    }
}