//% color="#009900" icon="\uf021" weight=90
namespace MotorControl {
    /**
     * Run a motor in a specific direction with a given speed.
     * @param motor Motor to control
     * @param direction Direction of rotation
     * @param speed Speed of the motor (0-100)
     */
    //% block="Run %motor|motor %direction|at speed %speed"
    export function runMotor(motor: Motors, direction: Dir, speed: number): void {
        // Map speed to 0-100 if needed
        speed = Math.clamp(0, 100, speed);
        // Implement the motor control based on your hardware and the Mbit extension
        // Example: Mbit_motor.MotorRun(motor, direction, speed);
    }

    // Add more custom blocks for motor control as needed.
}

enum Motors {
    // Define motor options, e.g., M1, M2, etc.
}

enum Dir {
    // Define direction options, e.g., CW, CCW, etc.
}
